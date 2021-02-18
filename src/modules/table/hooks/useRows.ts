import useFetch from 'modules/common/hooks/useFetch';
import { TableLayoutProps } from 'modules/table/components/TableLayout/TableLayout';
export default function useRows(url: string): TableLayoutProps {
  const { data, error, loading } = useFetch(url);
  return {
    loading,
    data,
    error,
  };
}
