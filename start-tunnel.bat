@ECHO OFF
    IF "%1"=="-p" (
        @ECHO "Starting saucelab connect with proxy"
        %~dp0bin\sc-4.3.16-win32\bin\sc.exe -u Aravind00Kumar -k a7cc7f35-0eb9-46eb-ad6d-840e0cc66133 --tunnel-identifier CucumberTunnel --no-remove-colliding-tunnels --wait-tunnel-shutdown --proxy-userpwd in002\ic018433:Admin1234$$
    )
    IF "%1"=="" (
        @ECHO "Starting saucelab connect"
        %~dp0bin\sc-4.3.16-win32\bin\sc.exe -u Aravind00Kumar -k a7cc7f35-0eb9-46eb-ad6d-840e0cc66133 --tunnel-identifier CucumberTunnel --no-remove-colliding-tunnels --wait-tunnel-shutdown
        )
@ECHO ON