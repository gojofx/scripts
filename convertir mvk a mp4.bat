@echo off

set /p nombre_archivo=Introduce el nombre del archivo (sin extension): 
ffmpeg -i "%nombre_archivo%.mkv" -c copy "%nombre_archivo%.mp4"

pause
