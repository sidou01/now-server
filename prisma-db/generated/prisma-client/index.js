"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "AppointmentA",
    embedded: false
  },
  {
    name: "AppointmentB",
    embedded: false
  },
  {
    name: "AppointmentType",
    embedded: false
  },
  {
    name: "Gender",
    embedded: false
  },
  {
    name: "ServiceA",
    embedded: false
  },
  {
    name: "ServiceB",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/sidou-0d214e/prisma-db/dev`
});
exports.prisma = new exports.Prisma();
