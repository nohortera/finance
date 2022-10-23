import Router from "../../components/common/Router/Router";
import {MemoryRouter} from "react-router-dom";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {setupStore} from "../../store";

export const renderSetup = (component, initialPath = '/') => {
    return render(
        <Provider store={setupStore()}>
            <MemoryRouter initialEntries={[initialPath]}>
                <Router />
                {component}
            </MemoryRouter>
        </Provider>
    )
}
