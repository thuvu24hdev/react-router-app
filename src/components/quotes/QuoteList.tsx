import { Fragment } from "react";

import QuoteItem, { Quote } from "./QuoteItem";
import classes from "./QuoteList.module.css";

interface QuoteListProps {
  quotes: Quote[];
}
const QuoteList = (props: QuoteListProps) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.quotes.map((quote: Quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
