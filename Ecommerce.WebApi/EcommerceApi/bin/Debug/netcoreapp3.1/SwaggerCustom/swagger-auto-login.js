var selectors = {
    authenticationDivId: '#Authentication_Authentication_GenerateAuthenticationToken',
    requestBody(parentSelector) {
        return parentSelector + ' textarea';
    },
    responseBody(parentSelector) {
        return parentSelector + ' .response_body';
    },
    responseCode(parentSelector) {
        return parentSelector + ' .response_code';
    },
    submitButton(parentSelector) {
        return parentSelector + ' .submit';
    }
}

function login() {
    var authenticationBody = {
        email: $('#auto-login-username').val(),
        password: $('#auto-login-password').val()
    }

    setRequest(selectors.authenticationDivId, authenticationBody);

    var responseBodySelector = selectors.responseBody(selectors.authenticationDivId);
    var responseCodeSelector = selectors.responseCode(selectors.authenticationDivId);
    onDomModified(responseBodySelector, () => {
        var responseText = $(responseBodySelector).text();
        if (responseText.length === 0) {
            return;
        }

        $(responseBodySelector).off();

        var authentication = safeJsonParse(responseText);
        if (!authentication || !authentication.token) {
            var responseCode = $(responseCodeSelector).text();
            outputError('Step 1 (authentication)', responseCode, authentication);
            clearApiKey();
            return;
        }

        changeApiKey(authentication.token);
        updateOutputText('token set to "' + authentication.token.substr(0, 20) + '...' + authentication.token.substr(authentication.token.length - 20) + '"');
    });

    clickSubmit(selectors.authenticationDivId);
}

function outputError(step, responseCode, response) {
    var errorMessage = step + ' failed: HTTP ' + responseCode + ' ' + translateHttpErrorCode(responseCode);
    var errors = response && (response.errors || response.error);
    if (errors) {
        errorMessage += '<p>Technical details: ' + JSON.stringify(errors) + '</p>';
    }
    updateOutputText(errorMessage);
}

function translateHttpErrorCode(errorCode) {
    switch (errorCode.trim()) {
        case '401':
            return 'Unauthorized (check username, password, and role)';
        case '403':
            return 'Forbidden (possibly a problem with roleId)';
        case '404':
            return 'Not Found (user, enterprise url, or role not found)';
        case '400':
            return 'Bad Request';
        case '500':
            return 'Internal Server Error';
    }
    return '';
}

function safeJsonParse(json) {
    try {
        return JSON.parse(json);
    }
    catch (e) {
        return null;
    }
}


function setRequest(parentSelector, requestPOJO) {
    $(selectors.requestBody(parentSelector)).val(JSON.stringify(requestPOJO));
}

function clickSubmit(parentSelector) {
    $(selectors.submitButton(parentSelector)).trigger("click");
}

function clearApiKey() {
    $('#input_apiKey').val('');
}

function changeApiKey(token) {
    $('#input_apiKey').val('JWT ' + token);
    $('#input_apiKey').trigger("change");
}

function updateOutputText(text) {
    $('#auto-authorize-output').html(text);
}

function onDomModified(selector, callback) {
    $(selector).on("DOMSubtreeModified", callback);
}

function injectAutoLoginHelper() {
    var isAlreadyInjected = $('#login-button').length;
    if (isAlreadyInjected) {
        return;
    }

    $('#message-bar').append(
        '<form>' +
        '<label>Email: </label><input id="auto-login-username" size="10" onkeydown="if (event.keyCode == 13) login()"> ' +
        '<label>Password: </label><input id="auto-login-password" size="10" type="password" onkeydown="if (event.keyCode == 13) login()"> ' +
        '<input id="login-button" type="button" value="auto-authorize" onclick="login();" />' +
        '<p><div id="auto-authorize-output"></p>' +
        '</form>');
}

$(document).ready(() => {
    if ($('.swagger-section')) {
        injectAutoLoginHelper();
    }

    onDomModified('.swagger-section', () => {
        injectAutoLoginHelper();
    });
});