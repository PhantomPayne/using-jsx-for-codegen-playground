This is playground to experiment with using JSX as a templating tool for codegen.

The goal is to be able to quickly and easily compose templates out of smaller
reusable template parts.

Obviously we lose out on a lot of the cool parts of React like managing state since
there is not state in static templates.  We do get the Composability of JSX and the full
power of javascript.

Another added benefit is that we can use propTypes and validateProps to validate the
data coming into the templates & components.

It could be cool, or kinda crazy.  Not sure yet.

Usage:

npm install
gulp runTemplates

If you're cool you can use "gulp watch" too.

Right now it will render any jsx templates in the src/example folder and copy them
to the dist folder.

The current goal is to demonstrate generating files for iOS ViewControllers.
This is a good example because we've got to generate both .h and .m files.

HeaderWrapper is an important part of this switcharoo.  Currently it has to be
included in every template that needs to create a header file.

We should probably do something different if it doesn't exist like not create the .h.
Hopefully we can find a better way to avoid the need for it anyway.

NOTES
* whitespace is sorta hard to control so templating for something like python might be hard.
