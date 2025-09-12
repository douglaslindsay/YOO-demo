#!/bin/bash
echo "NOTION_TOKEN length: ${#NOTION_TOKEN}"
node notionfetch.js
vite build