/**
 * ## App Context
 *
 * @notes   Provider's order does matter
 *
 */

import CombineProviders from "./combine-providers";
import { AuthContextProvider } from "./actions/auth-context";
import { ReportContextProvider } from "./actions/report-context";
import { SettingsContextProvider } from "./actions/settings-context";

// Provider Order
const providers = [
  AuthContextProvider,
  SettingsContextProvider,
  ReportContextProvider,
];

const AppContextProvider = ({ children }) => {
  return <CombineProviders providers={providers}>{children}</CombineProviders>;
};

export default AppContextProvider;
