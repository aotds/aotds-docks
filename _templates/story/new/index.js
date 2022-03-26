const path = require('path');

module.exports = {
  params: ({ args }) => {

    const storypath = args.path.replace( '.svelte', '.stories.svelte' );
    const component = path.basename(args.path).replace('.svelte','');

    return { storypath, component}
  }
}
