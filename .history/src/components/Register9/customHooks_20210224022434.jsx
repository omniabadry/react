import { useContext } from "react";
import { useDispatch } from "react-redux";
import { stepsContext } from "../context";
import api from "../services/api";
import { updateFreelancer } from "../redux/actions";

export const useAPIHelpers = () => {
    const { goNext, setFreelancerData } = useContext(stepsContext);

    const [{ loading: stepLoading }, submitData] = api.useAxios({ method: "post" }, { manual: true });

    const dispatch = useDispatch();

    const stepSubmit = (url, data, { setError }) => {
        submitData({ url, data }, { manual: true })
            .then((res) => {
                setFreelancerData(res.data.freelancerData);
                dispatch(updateFreelancer(res.data.freelancerData));
                goNext();
            })
            .catch((err) => {
                if (setError && err.validationErrors) {
                    err.validationErrors.forEach(({ name, type, message }) =>
                        setError(name, { type, message }),
                    );
                }
            });
    };

    return { stepLoading, stepSubmit };
};
