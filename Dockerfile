# Alege imaginea de bază
FROM node:alpine

# Instalează PM2 global
RUN npm install pm2 -g

# Setează directorul de lucru în container
WORKDIR /usr/src/app

# Copiază fișierele de pachete
COPY package*.json ./

# Instalează dependențele
RUN npm install

# Copiază restul codului sursă în container
COPY . .

# Expune portul pe care rulează aplicația
EXPOSE 3000

# Definește comanda de rulare a aplicației folosind PM2
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
