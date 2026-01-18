db = db.getSiblingDB("erp_dev");
db.createUser({
  user: "erp_user",
  pwd: "erp123",
  roles: [
    {
      role: "readWrite",
      db: "erp_dev",
    },
  ],
});
