import {Client} from 'basic-ftp'

export async function upload(password: string) {
    const client = new Client()

    client.ftp.verbose = true
    try {
        await client.access({
            host: 'koch.kasserver.com',
            user: 'f0121715',
            password: password,
            secure: true
        })
        console.log(await client.list())
        await client.clearWorkingDir()
        await client.uploadFromDir('dist')
    }
    catch(err) {
        console.log(err)
    }
    client.close()
}
