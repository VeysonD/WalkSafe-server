const dotenv = require('dotenv');
const db = require('./config.js');
const path = require('path');
const csvhandler = require('./CSV/csvhandler');

console.log('Seeding database');

var filePath = path.join(__dirname, "/CSV/stagingla.csv");
console.log('seed filePath', filePath);

// csvhandler();

/* QUERY START*/
// var queryString = "COPY StagingLAs( LURN_SAK , INCIDENT_DATE , STAT , STAT_DESC , STREET , CITY , ZIP , XY_POINT , INCIDENT_ID , REPORTING_DISTRICT , SEQ , UNIT_ID , UNIT_NAME , DELETED ) FROM '" + filePath + "' DELIMITER ',' CSV HEADER;";


// COPY staginglas (lurn_sak , incident_date , stat , stat_desc , street , city , zip , xy_point , incident_id , reporting_district , seq , unit_id , unit_name)
// FROM '/Users/FloweryPao/Documents/keepSafe-Server/db/CSV/stagingla.csv' DELIMITER '#' CSV HEADER;


// COPY StagingLAs [ ( column_name [, ...] ) ]
//     FROM { 'filename' | PROGRAM 'command' | STDIN }

// COPY StagingLAs FROM '/Users/FloweryPao/Documents/keepSafe-Server/db/CSV/stagingla.csv'  DELIMITER ';' CSV HEADER

/* QUERY END*/



/* WORKING QUERY STRING START*/
// db.sequelize.sync({
//   force:true
// })
//   .then(() => {
//     db.User.create({
//       username: 'Fantastic4',
//       email: 'fantastic4@gmail.com',
//       avatarUrl: 'https://avatars2.githubusercontent.com/u/31486494?v=4&s=200',
//       accessToken: 'abc123',
//       Contacts: [
//         {
//           contactName:'Human Torch',
//           phoneNumber: 1234567890
//         },
//         {
//           contactName: 'The Thing',
//           phoneNumber: 0000000000
//         },
//         {
//           contactName: 'Mr. Fantastic',
//           phoneNumber: 1111112222
//         },
//         {
//           contactName: 'Ms. Fantastic',
//           phoneNumber: 2222222222
//         }
//       ]
//     }, {
//       include: [db.Contact]
//     })
//     .then(() => {
//       db.CrimeType.bulkCreate(
//         [
//           { type: "CRIMINAL HOMICIDE" },
//           { type: "FORCIBLE RAPE" },
//           { type: "ROBBERY" },
//           { type: "AGGRAVATED ASSAULT" },
//           { type: "BURGLARY" },
//           { type: "LARCENY THEFT" },
//           { type: "GRAND THEFT AUTO" },
//           { type: "ARSON" },
//           { type: "FORGERY" },
//           { type: "FRAUD AND NSF CHECKS" },
//           { type: "SEX OFFENSES FELONIES" },
//           { type: "SEX OFFENSES MISDEMEANORS" },
//           { type: "NON-AGGRAVATED ASSAULTS" },
//           { type: "WEAPON LAWS" },
//           { type: "OFFENSES AGAINST FAMILY" },
//           { type: "NARCOTICS" },
//           { type: "LIQUOR LAWS" },
//           { type: "DRUNK / ALCOHOL / DRUGS" },
//           { type: "DISORDERLY CONDUCT" },
//           { type: "VAGRANCY" },
//           { type: "GAMBLING" },
//           { type: "DRUNK DRIVING VEHICLE / BOAT" },
//           { type: "VEHICLE / BOATING LAWS" },
//           { type: "VANDALISM" },
//           { type: "WARRANTS" },
//           { type: "RECEIVING STOLEN PROPERTY" },
//           { type: "FEDERAL OFFENSES W/O MONEY" },
//           { type: "FEDERAL OFFENSES WITH MONEY" },
//           { type: "FELONIES MISCELLANEOUS" },
//           { type: "MISDEMEANORS MISCELLANEOUS" }
//         ])
//       .then(() => {
//         db.sequelize.query(queryString)
//         .then(() => db.sequelize.close())
//       })
//     })
//   })
/* WORKING ORIGIN END*/




/* WORKING ORIGIN START*/
///*
db.sequelize.sync({
  force:true
})
  .then(() => {
    db.User.create({
      username: 'Fantastic4',
      email: 'fantastic4@gmail.com',
      avatarUrl: 'https://avatars2.githubusercontent.com/u/31486494?v=4&s=200',
      accessToken: 'abc123',
      Contacts: [
        {
          contactName:'Human Torch',
          phoneNumber: 1234567890
        },
        {
          contactName: 'The Thing',
          phoneNumber: 0000000000
        },
        {
          contactName: 'Mr. Fantastic',
          phoneNumber: 1111112222
        },
        {
          contactName: 'Ms. Fantastic',
          phoneNumber: 2222222222
        }
      ]
    }, {
      include: [db.Contact]
    })
    .then(() => {
      db.CrimeType.bulkCreate(
        [
          { type: "CRIMINAL HOMICIDE" },
          { type: "FORCIBLE RAPE" },
          { type: "ROBBERY" },
          { type: "AGGRAVATED ASSAULT" },
          { type: "BURGLARY" },
          { type: "LARCENY THEFT" },
          { type: "GRAND THEFT AUTO" },
          { type: "ARSON" },
          { type: "FORGERY" },
          { type: "FRAUD AND NSF CHECKS" },
          { type: "SEX OFFENSES FELONIES" },
          { type: "SEX OFFENSES MISDEMEANORS" },
          { type: "NON-AGGRAVATED ASSAULTS" },
          { type: "WEAPON LAWS" },
          { type: "OFFENSES AGAINST FAMILY" },
          { type: "NARCOTICS" },
          { type: "LIQUOR LAWS" },
          { type: "DRUNK / ALCOHOL / DRUGS" },
          { type: "DISORDERLY CONDUCT" },
          { type: "VAGRANCY" },
          { type: "GAMBLING" },
          { type: "DRUNK DRIVING VEHICLE / BOAT" },
          { type: "VEHICLE / BOATING LAWS" },
          { type: "VANDALISM" },
          { type: "WARRANTS" },
          { type: "RECEIVING STOLEN PROPERTY" },
          { type: "FEDERAL OFFENSES W/O MONEY" },
          { type: "FEDERAL OFFENSES WITH MONEY" },
          { type: "FELONIES MISCELLANEOUS" },
          { type: "MISDEMEANORS MISCELLANEOUS" }
        ])
        .then(() => db.sequelize.close())
    })
  })
//*/
/* WORKING ORIGIN END*/
