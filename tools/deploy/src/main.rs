use futures::executor::block_on;
use suppaftp::async_native_tls::TlsConnector;
use suppaftp::{FtpError, FtpStream};

fn main() {
    let result = block_on(do_it());

    let integer = 13;

    match result {
        Ok(res) => res,
        Err(e) => {
            eprintln!("ERROR: {}", e);
            eprintln!("ERROR: {}", integer);
            std::process::exit(1);
        }
    }
}

async fn do_it() -> Result<(), FtpError> {
    let ftp_stream = FtpStream::connect("koch.kasserver.com:21").await?;

    let mut ftp_stream = ftp_stream
        .into_secure(TlsConnector::new(), "koch.kasserver.com")
        .await?;

    ftp_stream.login("f0121715", "password").await?;
    ftp_stream.quit().await?;

    Ok(())
}
