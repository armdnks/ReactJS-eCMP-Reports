/**
 * ## App Context
 *
 * @notes   Provider's order does matter
 *
 */

import CombineProviders from "./combine-providers";
import { AuthContextProvider } from "./actions/auth-context";
import { ReportContextProvider } from "./actions/report-context";
import { UIContextProvider } from "./actions/ui-context";

// Provider Order
const providers = [
  AuthContextProvider,
  UIContextProvider,
  ReportContextProvider,
];

const AppContextProvider = ({ children }) => {
  return <CombineProviders providers={providers}>{children}</CombineProviders>;
};

export default AppContextProvider;
