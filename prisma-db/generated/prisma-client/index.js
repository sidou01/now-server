"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Doctor",
    embedded: false
  },
  {
    name: "Appointment",
    embedded: false
  },
  {
    name: "Review",
    embedded: false
  },
  {
    name: "AppointmentDuration",
    embedded: false
  },
  {
    name: "Gender",
    embedded: false
  },
  {
    name: "DoctorSpecialty",
    embedded: false
  },
  {
    name: "ClientMessage",
    embedded: false
  },
  {
    name: "ServiceMessage",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466/prisma-db/dev`
});
exports.prisma = new exports.Prisma();
