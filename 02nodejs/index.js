const fsPromise = require("fs").promises;
const path = require("path");

const fileOperations = async () => {
  try {
    const data = await fsPromise.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log("ReadFile Task Completed >>> ", data);

    await fsPromise.unlink(path.join(__dirname, "files", "starter.txt"));

    await fsPromise.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    await fsPromise.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\n Yes...it is."
    );
    await fsPromise.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseWriteCompleted.txt")
    );

    const newData = await fsPromise.readFile(
      path.join(__dirname, "files", "promiseWriteCompleted.txt"),
      "utf8"
    );

    console.log("Readfile for Newdata Completed >>> ", newData);
  } catch (err) {
    console.error(err);
  }
};

fileOperations();

// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log("Read File Task >>>", data);
//   }
// );

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you.",
//   (err) => {
//     if (err) throw err;
//     console.log("Write Task Completed...");

//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "/n/n Yes it is",
//       (err) => {
//         if (err) throw err;
//         console.log("Append Task Completed...");

//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "newReply.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("Rename Task Completed...");
//           }
//         );
//       }
//     );
//   }
// );

// console.log("Hello...");

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
