rem ng build

rmdir "../FooseStatsFrontEndDeploy/dist" /s/q

xcopy "./dist" "../FooseStatsFrontEndDeploy/dist" /i
