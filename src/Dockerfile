FROM node:20
WORKDIR /app
COPY --from=build /app /app
EXPOSE 3100
CMD ["node", "src/index.js"]
