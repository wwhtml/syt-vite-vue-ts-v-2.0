interface NavListItem {
  name: string;
  path: string;
}

interface NavList {
  name: string;
  id: string;
  children: NavListItem[];
}
