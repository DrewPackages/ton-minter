import { useSearchParams } from "react-router-dom";

export function getNetwork(params: URLSearchParams): "testnet" | "mainnet" {
  if (params.has("network")) {
    const network = params.get("network");
    if (network === "testnet" || network === "mainnet") {
      return network;
    }
  }

  return process.env.REACT_APP_NETWORK as any;
}

export function useNetwork(): { network: "mainnet" | "testnet" } {
  const [params] = useSearchParams();

  return {
    network: getNetwork(params),
  };
}
