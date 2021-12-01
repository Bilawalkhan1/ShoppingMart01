export interface NavItem {
    id : number;
    displayName: string;
    route?: string;
    children?: NavItem[];
  }
  