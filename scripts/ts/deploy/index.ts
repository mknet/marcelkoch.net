import { upload } from "./ftp-upload"

const ftpPass = process.env.FTP_PASSWORD
if (!ftpPass) {
  console.log("env variable 'FTP_PASSWORD' is not set")
  process.exit(1)
}

upload(ftpPass)

