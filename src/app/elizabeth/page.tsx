import ElizabethClient from "./ElizabethClient";
import {
    ELIZABETH_REQUESTS, DIFFICULTY_COLORS
} from "../../lib/data/elizabeth";
import { List, Ghost, Gem, Skull, CheckCircle, Star } from "lucide-react";

// Variabel ini harus tetap ada karena dibutuhkan oleh ElizabethClient
const CATEGORY_CONFIG = {
    all: { icon: <List size={16} />, gradient: "from-blue-400 to-blue-600", label: "All" },
    persona: { icon: <Ghost size={16} />, gradient: "from-purple-400 to-purple-600", label: "Persona" },
    item: { icon: <Gem size={16} />, gradient: "from-emerald-400 to-emerald-600", label: "Item" },
    shadow: { icon: <Skull size={16} />, gradient: "from-red-400 to-red-600", label: "Shadow" },
    task: { icon: <CheckCircle size={16} />, gradient: "from-amber-400 to-amber-600", label: "Task" },
    special: { icon: <Star size={16} />, gradient: "from-pink-400 to-pink-600", label: "Special" },
};

export default function ElizabethPage() {
    return (
        <>
            {/* SectionTitle dihapus dari sini agar tidak duplikat dengan yang ada di ElizabethClient */}
            <ElizabethClient
                elizabethRequests={ELIZABETH_REQUESTS}
                difficultyColors={DIFFICULTY_COLORS}
                categoryConfig={CATEGORY_CONFIG}
            />
        </>
    );
}