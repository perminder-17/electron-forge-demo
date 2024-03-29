---
sidebar_position: 2
---
# Importing an Existing Project

If you already have an Electron app and want to try out Electron Forge, you can either use Forge's `import` script or manually configure Forge yourself.

These steps will get you set up with a basic build pipeline that can create [squirrel.windows.md](config/makers/squirrel.windows.md "mention") (Windows), [zip.md](config/makers/zip.md "mention") (macOS), and [deb.md](config/makers/deb.md "mention") (Linux) installers when running `electron-forge make`.

## Using the import script

Importing an existing Electron app into the Electron Forge workflow can be done automatically using Forge's `import` command.
```shell
cd my-app
npm install --save-dev @electron-forge/cli
npm exec --package=@electron-forge/cli -c "electron-forge import"
```

This script will set up Forge to package your app and build installers for it.
:::info
If you're already using other Electron tooling, it will try to automatically migrate the settings as much as possible, but some of it may need to be migrated manually.
:::

## Setting up Forge manually

If the import script does not work for some reason, you can also install Forge manually. To get identical behavior to the script, follow the steps below.

### Installing dependencies

First, install Forge's CLI and the target Makers as devDependencies in your project.

```bash
cd my-app
npm install --save-dev @electron-forge/cli @electron-forge/maker-squirrel @electron-forge/maker-deb @electron-forge/maker-zip
```
### Configuring package.json

To start using Forge, add a few command scripts to your package.json file:
```jsx title="package.json"
{
  // ...
  "scripts": {
    "start": "electron-forge start",
    "package": "electron-forge package",
    "make": "electron-forge make",
    "publish": "electron-forge publish"
  }
  // ... 
}
```
Then, set up your Forge [configuration.md](config/configuration.md "mention") in the `config.forge` field in package.json
```jsx title="package.json"
{
  // ...
  "config": {
    "forge": {
      "packagerConfig": {},
      "makers": [
        {
          "name": "@electron-forge/maker-squirrel",
          "config": {
            "name": "electron_quick_start"
          }
        },
        {
          "name": "@electron-forge/maker-zip",
          "platforms": [
            "darwin"
          ]
        },
        {
          "name": "@electron-forge/maker-deb",
          "config": {}
        },
        {
          "name": "@electron-forge/maker-rpm",
          "config": {}
        }
      ]
    }
  }
  // ...
}
```
See the [publishers](config/publishers/ "mention") documentation for more information.
