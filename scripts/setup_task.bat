@echo off
echo Setting up Hourly Autoblog for Hebe Wellness...
schtasks /create /tn "HebeWellness Hourly Blog" /tr "C:\IDE-PROJECTS\_Client-Work\hebewellness\scripts\run_auto_blog.bat" /sc hourly
echo Successfully scheduled the task to run every hour.
pause
