import { upload } from './ftp-upload' 
import { Client } from 'basic-ftp'

const ftp = {
    verbose : null
}

const access = jest.fn()
const close = jest.fn()
const list = jest.fn()
const clearWorkingDir = jest.fn()
const uploadFromDir = jest.fn()

jest.mock('basic-ftp', () => {
    return {
      Client: jest.fn().mockImplementation(() => {
        return { ftp, access, close, list, clearWorkingDir, uploadFromDir};
      }),
    };
  });

  const ClientMock = Client as jest.MockedClass<typeof Client>;

describe('ftp-upload', () => {

    it('uses ftp client', async () => {
        await upload('dummy')

        expect(Client).toBeCalledTimes(1)

        expect(ClientMock.mock.calls.length).toEqual(1)

        expect(ftp.verbose).toBeTruthy()

        expect(access).toBeCalledWith({
            host: 'koch.kasserver.com',
            user: 'f0121715',
            password: 'dummy',
            secure: true
        })

        expect(access).toHaveBeenCalledBefore(list)
        expect(close).toHaveBeenCalledAfter(list)
    })
})