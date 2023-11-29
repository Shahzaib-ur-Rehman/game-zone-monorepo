
import {Shell } from "@repo/ui/shell"; 
import { Fragment } from "react";
 import CartPicker from  './CartPicker.tsx'

export default function Page(): JSX.Element {
  return (
     <Fragment>
      <Shell title="My App">
       <CartPicker/>
      </Shell>

     </Fragment>
  );
}
