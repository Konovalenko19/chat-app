module.exports = (pathPrefix = "src") => {
  const list = [
    // Redux
    { key: "actions", value: "/redux/actions" },
    { key: "reducers", value: "/redux/reducers" },
    { key: "store", value: "/redux/store" },

    // Other
    { key: "api", value: "/api" },
    { key: "components", value: "/components" },
    { key: "utils", value: "/utils" },
  ];

  return list.map((alias) => ({
    ...alias,
    value: `${pathPrefix}${alias.value}`,
  }));
};
