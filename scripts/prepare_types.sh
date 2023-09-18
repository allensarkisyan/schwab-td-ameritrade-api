#!/bin/bash

PACKAGE="@allensarkisyan/schwab-td-ameritrade-api"
DECLARATIONS="index.d.ts"

sed -i \
-e "s|'td-api'|'$PACKAGE'|g" \
-e "s|'td-utils'|'$PACKAGE/td-utils'|g" \
-e "s|'utils'|'$PACKAGE/utils'|g" \
-e "s|'@types/index'|'$PACKAGE/@types'|g" \
-e "s|'schemas/index'|'$PACKAGE/schemas'|g" \
"$DECLARATIONS"