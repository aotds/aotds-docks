const path = require('path');

module.exports = {
  params: ({ args }) => {

    const storypath = args.path.replace( '.svelte', '.stories.svelte' );

    const component = path.basename(args.path.replace('/index.svelte','')).replace('.svelte','');

    const to = path.join(path.dirname(args.path), component + '.stories.svelte' );
    return { storypath, component, to}
  }
}
