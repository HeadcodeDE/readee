set windows-shell := ["powershell.exe", "-c"]

## client

# Build the Angular client
[working-directory: "readee.frontend"]
build-frontend:
    npx ng build

# Start the Angular dev server
[working-directory: "readee.frontend"]
serve:
    npx ng serve

# Start the Angular dev server and open in browser
[working-directory: "readee.frontend"]
serve-open:
    npx ng serve --open

# Run the unit tests
[working-directory: "readee.frontend"]
test:
    npx ng test

# Generate a component under app/components
[working-directory: "readee.frontend/src"]
g-component name:
    npx ng generate component app/components/{{name}} --export --skip-tests
