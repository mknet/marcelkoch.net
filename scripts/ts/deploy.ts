import {Client} from "basic-ftp"

const ftpPass = process.env.FTP_PASSWORD
if (!ftpPass) {
  console.log("env variable 'FTP_PASSWORD' is not set")
  process.exit(1)
}

deploy()

export async function deploy() {
    const client = new Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: "koch.kasserver.com",
            user: "f0121715",
            password: ftpPass,
            secure: true
        })
        console.log(await client.list())
        await client.clearWorkingDir()
        await client.uploadFromDir("dist")
    }
    catch(err) {
        console.log(err)
    }
    client.close()
}
