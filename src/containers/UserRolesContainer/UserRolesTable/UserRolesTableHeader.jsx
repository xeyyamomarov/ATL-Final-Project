export const UserRolesTableHeader = () => {

  return [
    {
      key: "name",
      label: "Adı",
      minWidth: "220"
    },
    {
      key: "isStatic",
      label: "Statikdir?",
      minWidth: "120"
    },
    {
      key: "description",
      label: "Təsviri",
      minWidth: "170"
    },
    {
      key: "roleIcons",
      label: "",
      minWidth: "170"
    },
  ]
};