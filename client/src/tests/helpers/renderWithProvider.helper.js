import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {setupStore} from "../../store";

export const renderWithProvider = (component) => {
    return render(
        <Provider store={setupStore()}>
            {component}
        </Provider>
    )
}
