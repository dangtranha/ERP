db = db.getSiblingDB("ERP");

db.createUser({
  user: "erp_user",
  pwd: "erp123",
  roles: [
    {
      role: "readWrite",
      db: "ERP",
    },
  ],
});

db.createCollection("employees");
