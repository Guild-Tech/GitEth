import React, { useContext, useEffect, useState } from "react";
// import { MetricsContext } from "../../../store/context/MetricsContext";
import USDT from "@/assets/images/usdt.png";
import profilePic from "@/assets/images/Ellipse 5 (3).png";
import { MetricsContext } from "@/store/context/MetricsContext";

// Placeholder component for loading state
const Placeholder: React.FC = () => (
  <div className="bg-[#293056] md:p-6 rounded-xl border border-customBorder animate-pulse">
    <p className="text-3xl md:text-4xl bg-gray-600 h-8 w-3/4 mb-4"></p>
    <p className="text-sm md:text-base bg-gray-500 h-5 w-1/2"></p>
  </div>
);

/**
 * PaymentsFunding Component
 * 
 * This component displays the payments and funding information for the user.
 * It fetches the available funds, pending payments, and a table of payment records from the context (MetricsContext).
 * It handles loading and error states by displaying placeholders and error messages when necessary.
 * 
 * The component includes:
 * - Summary cards displaying available funds and pending payments.
 * - A table that shows contributors, amounts, statuses, and actions (Reward button) for each payment record.
 * 
 * States:
 * - isLoading: Controls loading state.
 * - hasError: Controls error state in case data fetch fails.
 * - metrics: Contains the data (funds, payments, etc.) retrieved from the context.
 */

const PaymentsFunding: React.FC = () => {
  const context = useContext(MetricsContext);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Ensure MetricsContext is available
  if (!context) {
    throw new Error("PaymentsFunding must be used within MetricsProvider");
  }

  const { metrics } = context;

  // Simulate data fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000); // Simulated delay
      } catch (error) {
        console.error("Error fetching payments data:", error);
        setHasError(true);
      }
    };

    fetchData();
  }, []);

  // Error handling: If there's an error, display an error message
  if (hasError) {
    return (
      <div className="text-center text-red-500">
        <p>Failed to load payments and funding data. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="text-white font-kern md:p-6 space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {isLoading ? (
          <>
            <Placeholder />
            <Placeholder />
          </>
        ) : (
          <>
            {/* Available Funds Card */}
            <div
              className="border-border backdrop-blur-md border-[1px] bg-white bg-opacity-5  p-6 rounded-3xl flex flex-col items-start space-y-2"
              title="Total available funds"
            >
              <p className="text-3xl md:text-4xl font-light font-kern">
                {metrics.availableFunds || "N/A"}{" "}
                <span className="text-gray-400 text-lg md:text-xl font-light">
                  USDT
                </span>
              </p>
              <p className="text-white text-sm md:text-base font-thin">
                Available Funds
              </p>
            </div>

            {/* Pending Payments Card */}
            <div
              className="border-border backdrop-blur-md border-[1px] bg-white bg-opacity-5  p-6 rounded-3xl flex flex-col items-start space-y-2"
              title="Pending payments details"
            >
              <p className="text-3xl md:text-4xl font-light font-kern">
                {metrics.pendingPayments.split(" ")[0] || "N/A"}{" "}
                <span className="text-gray-400 text-lg md:text-xl font-light">
                  USDT
                </span>{" "}
                <span className="text-gray-400 text-lg md:text-xl font-light">
                  to
                </span>{" "}
                <span className="text-white text-lg md:text-xl font-bold">
                  {metrics.pendingPayments.split(" ")[2] || "N/A"}
                </span>{" "}
                <span className="text-gray-400 text-lg md:text-xl font-light">
                  Contributors
                </span>
              </p>
              <p className="text-white text-sm md:text-base">
                Pending Payments
              </p>
            </div>
          </>
        )}
      </div>

      {/* Payments Table */}
      <div className="overflow-x-auto">

        <div className="border-border backdrop-blur-md border-[1px] bg-white bg-opacity-5 p-4 md:p-6 rounded-xl ">
          <div className="border-border border-opacity-50 backdrop-blur-md border-[1px] bg-white bg-opacity-5 rounded-xl overflow-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left font-light font-kern text-white bg-[#0D0F1C]">
                <th className="py-3 px-4 whitespace-nowrap">Contributors</th>
                <th className="py-3 px-4 whitespace-nowrap">Amount</th>
                <th className="py-3 px-4 whitespace-nowrap">Status</th>
                <th className="py-3 px-4 whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <>
                  {[...Array(3)].map((_, index) => (
                    <tr
                      key={index}
                      className="text-gray-400 h-6 bg-[#101323] animate-pulse"
                    >
                      <td className="py-4 px-4" colSpan={4}>
                        Loading payment records...
                      </td>
                    </tr>
                  ))}
                </>
              ) : metrics.payments.length > 0 ? (
                metrics.payments.map((payment, index) => (
                  <tr
                    key={index}
                    className="text-white font-kern h-6 border border-b-[#293056] bg-[#101323]"
                  >
                    {/* Contributor Cell */}
                    <td className="py-4 px-4 items-center space-x-2">
                      <div className="flex items-center justify-start space-x-3 sm:mr-4 font-kern rounded-full w-fit p-1 bg-[#0D0F1C]">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white">
                          {/* Profile Picture */}
                          <img src={profilePic} alt="Profile" />
                        </div>
                        <div>
                          <h3 className="text-white pr-2 font-light">
                            {payment.contributor || "Unknown"}
                          </h3>
                        </div>
                      </div>
                    </td>

                    {/* Amount Cell */}
                    <td className="py-4 px-4 items-center space-x-2">
                      <img
                        src={USDT}
                        alt="USDT"
                        className="w-5 h-5 inline-block object-contain"
                      />
                      <span>{payment.amount} USDT</span>
                    </td>

                    {/* Status Cell */}
                    <td className="py-4 px-4">{payment.status}</td>

                    {/* Action Cell */}
                    <td className="py-4 px-4">
                      <button className="bg-white text-black px-4 py-1 rounded-full">
                        Reward
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="text-gray-400 h-6 bg-[#101323]">
                  <td className="py-4 px-4" colSpan={4}>
                    No payment records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsFunding;