// features/search/ui/SearchBar.tsx

import { useForm, type SubmitHandler } from "react-hook-form"
import styles from "./SearchBar.module.css";
import { Button } from "shared/ui/button";

type Props = {
    onSubmitSearch: (query: string) => void;

    value?: string
};

type FormValues = {
    search: string;
};
debugger
export const SearchBar = ({ onSubmitSearch, value, }: Props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>({
        defaultValues: { search: value }
    });

    const searchValue = watch("search");
    const isDisabled = !searchValue?.trim();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        if (data.search.trim()) {
            onSubmitSearch(data.search);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.inputWrapper}>
                <input
                    type='search'

                    placeholder=" Find a movie, series, person..."
                    {...register("search", { required: "Enter search query" })}
                    className={`${styles.input} ${errors.search ? styles.inputError : ""}`}
                />
                {errors.search && (
                    <p className={styles.errorMessage}>{errors.search.message}</p>
                )}
            </div>
            <Button disabled={isDisabled} variant='secondary'>Search</Button>
        </form>
    );
};
