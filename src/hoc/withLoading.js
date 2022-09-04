import React, {useState} from "react";
import { RevolvingDot } from "react-loader-spinner";
import './spinner.scss'


const withLoading = WrappedComponent => {
    return props => {
        const [loading, setLoading] = useState(true);
        return(
            <>
            {loading && <div className="deneme">
                <RevolvingDot
                height="100"
                width="100"
                radius="6"
                color="#4fa94d"
                secondaryColor=''
                ariaLabel="revolving-dot-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
               
            }
            <WrappedComponent
                setLoading={setLoading}
                {...props}
            />
            </>
        )
    }
}

export default withLoading;