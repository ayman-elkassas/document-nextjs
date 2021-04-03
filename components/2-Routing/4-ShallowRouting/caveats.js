// Shallow routing only works for same page URL changes. For example,
// let's assume we have another page called pages/about.js, and you run this:

router.push('/?counter=10', '/about?counter=10', { shallow: true })