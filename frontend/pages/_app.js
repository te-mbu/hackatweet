import "../styles/globals.css";
import Head from "next/head";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import tweets from '../reducers/tweets'

const reducers = combineReducers({ tweets });

const persistConfig = { key: "Hackatweet", storage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);


function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
       <PersistGate persistor={persistor}>
      <Head>
        <title>Hackatweet</title>
      </Head>
      <Component {...pageProps} />
       </PersistGate>
    </Provider>
  );
}

export default App;
