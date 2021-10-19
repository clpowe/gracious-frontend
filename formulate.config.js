export default {
  classes: {
    outer: 'mb-8',
    input(context) {
      switch (context.classification) {
        case 'button':
          return 'bg-pink-200 rounded px-3 py-2 leading-none hover:bg-pink-300  border-box w-full mb-1'
        default:
          return 'border border-pink-400  rounded px-3 py-4 leading-none focus:border-pink-500 outline-none border-box w-full mb-1'
      }
    },
    label: 'font-medium text-xl uppercase pb-8',
    help: 'text-xs mb-1 text-gray-600',
    error: 'text-pink-500 text-xs mb-1',
  },
}
