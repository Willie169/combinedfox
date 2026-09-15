#!/usr/bin/env bash

rm -f Peskyfox.js user.js
wget https://github.com/yokoffing/Betterfox/raw/refs/heads/main/Peskyfox.js
wget https://raw.githubusercontent.com/arkenfox/user.js/refs/heads/Thorin-Oakenpants-patch-1/user.js
test -f user.js || wget https://github.com/arkenfox/user.js/raw/refs/heads/master/user.js
cat Peskyfox.js arkenfox-overrides.js Peskyfox-overrides.js extra-overrides.js >user-overrides.js
cat user-overrides.js >>user.js
