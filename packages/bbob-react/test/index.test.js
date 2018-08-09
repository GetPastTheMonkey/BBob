const React = require('react');
const { shallow } = require('enzyme');
const BBCode = require('../lib');
const presetHTML5 = require('../lib/preset-html5');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-15');

Enzyme.configure({ adapter: new Adapter() });

const renderBBCode = input => shallow(
    <BBCode plugins={[presetHTML5()]}>{input}</BBCode>
).html();

describe('@bbob/react', () => {
  test('[b]bolded text[/b]', () => {
    const html = renderBBCode('[b]bolded text[/b]');

    expect(html).toBe('<span><span style="font-weight:bold;">bolded text</span></span>')
  });

  test('[i]italicized text[/i]', () => {
    const html = renderBBCode('[i]italicized text[/i]');

    expect(html).toBe('<span><span style="font-style:italic;">italicized text</span></span>')
  });

  test('[u]underlined text[/u]', () => {
    const html = renderBBCode('[u]underlined text[/u]');

    expect(html).toBe('<span><span style="text-decoration:underline;">underlined text</span></span>')
  });

  test('[s]strikethrough text[/s]', () => {
    const html = renderBBCode('[s]strikethrough text[/s]');

    expect(html).toBe('<span><span style="text-decoration:line-through;">strikethrough text</span></span>')
  });

  test('[url]https://en.wikipedia.org[/url]', () => {
    const html = renderBBCode('[url]https://en.wikipedia.org[/url]');

    expect(html).toBe('<span><a href="https://en.wikipedia.org">https://en.wikipedia.org</a></span>')
  });
});
