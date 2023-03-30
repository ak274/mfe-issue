// Core libraries such as angular/core, @angular/router, @angular/common, ngrx, etc. must be
// singletons. Otherwise the applications will not work together.
const coreLibraries = new Set([
  '@angular/core',
  '@angular/common',
  '@angular/common/http',
  '@angular/platform-browser/animations',
  '@angular/router',
  '@angular/forms',
  'rxjs',
  // Workspace libraries
  '@mfe-issue/environment',
]);

module.exports = {
  // Share core libraries, and avoid everything else
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      return defaultConfig;
    }

    // Returning false means the library is not shared.
    return false;
  },
};
