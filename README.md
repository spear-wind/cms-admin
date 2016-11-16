# cms-admin
SpearWind CMS Interface

```
npm install
npm test
npm start
```

## Testing individual tasks using fly

Params for individual tasks will be read from your local environment variables. To run a task that requires params:

```
cms-admin $ fly -t spearwind execute -c \
  ./ci/test.yml \
  --input cms-admin=.
```
