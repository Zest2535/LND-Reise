$map = @(
    @{name='barcelona'; query='barcelona'},
    @{name='dubai'; query='dubai'},
    @{name='bali'; query='bali'},
    @{name='capetown'; query='cape town'},
    @{name='vancouver'; query='vancouver'},
    @{name='sydney'; query='sydney'},
    @{name='marrakech'; query='marrakech'},
    @{name='edinburgh'; query='edinburgh'}
)
$base = 'c:\Users\lukas\Documents\PROJEKT1\LND-Reisen-main\LND-Reisen-main\img\'

foreach ($m in $map) {
    $out = Join-Path $base ($m.name + '.jpg')
    $url = 'https://source.unsplash.com/featured/?' + ($m.query -replace ' ', '%20')
    $i = 0
    while ($i -lt 4) {
        try {
            Write-Host "Downloading $($m.name) -> $out (attempt $($i+1))"
            Invoke-WebRequest -Uri $url -OutFile $out -UseBasicParsing -ErrorAction Stop
            Write-Host "OK: $out"
            break
        } catch {
            Write-Host "Attempt $($i+1) failed for $($m.name): $($_.Exception.Message)"
            Start-Sleep -Seconds (2 * ($i+1))
            $i++
            if ($i -ge 4) { Write-Host "FAILED: $($m.name) after 4 attempts" }
        }
    }
}
Write-Host 'Download script finished.'
