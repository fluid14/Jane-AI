import React, { useContext } from 'react';
import * as styles from './Messages.module.sass';
import { MessageContext } from '@/components/Dashboard/context/messageContext';
import cs from 'classnames';
import ReactMarkdown from 'react-markdown';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import rangeParser from 'parse-numeric-range';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('json', json);

export const Messages = () => {
  const { messages } = useContext(MessageContext);
  const syntaxTheme = oneDark;

  const MarkdownComponents = {
    code({ node, inline, className, ...props }) {
      const hasLang = /language-(\w+)/.exec(className || '');
      const hasMeta = node?.data?.meta;

      const applyHighlights = (applyHighlights) => {
        if (hasMeta) {
          const RE = /{([\d,-]+)}/;
          const metadata = node.data.meta?.replace(/\s/g, '');
          const strlineNumbers = RE?.test(metadata) ? RE?.exec(metadata)[1] : '0';
          const highlight = rangeParser(strlineNumbers);
          const data = highlight.includes(applyHighlights) ? 'highlight' : null;
          return { data };
        } else {
          return {};
        }
      };

      return hasLang ? (
        <SyntaxHighlighter
          style={syntaxTheme}
          language={hasLang[1]}
          PreTag='div'
          className='codeStyle'
          showLineNumbers={true}
          wrapLines={hasMeta}
          useInlineStyles={true}
          lineProps={applyHighlights}
        >
          {props.children}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props} />
      );
    },
  };

  return (
    <div className={styles.messages}>
      {messages?.map(({ text, isQuestion }, index) => (
        <div className={cs(styles.messageCloud, { [styles.isQuestion]: isQuestion })} key={index}>
          <ReactMarkdown className={styles.text} components={MarkdownComponents}>
            {text}
          </ReactMarkdown>
        </div>
      ))}
    </div>
  );
};
