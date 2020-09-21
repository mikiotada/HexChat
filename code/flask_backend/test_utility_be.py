import pytest

from utility_be import validate_json

# ---------------------------------------
# Testing Data Creation
# ---------------------------------------
@pytest.fixture
def success_data():
    data = {
        "name": "test_group",
        "user_ids": [1, 2, 3, 4, 5, 6],
        "test_str": {
            "welcome_str": {"type": 1, "content": "welcome~"},
            "ending_str": [1, 2, 3],
        },
    }
    return data


@pytest.fixture
def failure_data():
    data = {
        "name": "test_group",
        "user_ids": [1, 2, 3, 4, 5, 6],
        "test_str": {
            "welcome_str": {"type": "1", "content": "welcome~"},
            "ending_str": [1, 2, 3],
        },
    }
    return data


# ---------------------------------------
# Testing Data Creation
# ---------------------------------------
def test_validate_json_success(success_data):
    result = validate_json(success_data, form_group_schema)
    # it should pass the validation
    assert result[0]


def test_validate_json_failure(failure_data):
    result = validate_json(failure_data, form_group_schema)
    # it should not pass the validation, hence not
    assert not result[0]
