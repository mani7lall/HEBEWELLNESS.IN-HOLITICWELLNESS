@echo off
:loop
echo [OMO] STARTING AUTONOMOUS RESEARCH BATCH...
node scripts/auto_blog_v4.mjs
echo [OMO] BATCH COMPLETE. SLEEPING FOR 1 HOUR...
timeout /t 3600
goto loop
